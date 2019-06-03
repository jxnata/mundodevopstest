import { PermissionsAndroid, Platform, NativeModules } from 'react-native';

class Configuracoes {
    
    local = () => {
        return Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2)
          : NativeModules.I18nManager.localeIdentifier.substring(0, 2)
    }
    
    async getToken() {
        return await AsyncStorage.getItem('@encontreiApp:token') || false;
    }

    async setToken(token, user) {
        await AsyncStorage.setItem('@encontreiApp:token', token);
        await AsyncStorage.setItem('@encontreiApp:user', user);
    }
    
    async logout() {
        await AsyncStorage.removeItem('@encontreiApp:token');
    }

    async getUser() {
        return JSON.parse(await AsyncStorage.getItem('@encontreiApp:user')) || false;
    }

    async getPosition() {
        return JSON.parse(await AsyncStorage.getItem('@encontreiApp:location')) || {type:"Point", coordinates:[0,0]};
    }

    async setPosition()
    {
        if (Platform.OS == 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Permissão de acesso à localização',
                        'message': 'Encontrei deseja ter acesso à sua localização'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(
                        async (position) => {
                            var pos = {type: 'Point', coordinates: [position.coords.longitude, position.coords.latitude]};
                            await AsyncStorage.setItem('@encontreiApp:location', JSON.stringify(pos));
                        },
                        (error) => {
                            console.tron.log(error);
                        },
                        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
                    );
                } else {
                    alert("O Encontrei precisa da localização para funcionar.");
                }
            } catch (err) {
                alert(err);
            }    
        }
        else {
            Geolocation.getCurrentPosition(
                async (position) => {
                    var pos = {type: 'Point', coordinates: [position.coords.longitude, position.coords.latitude]};
                    await AsyncStorage.setItem('@encontreiApp:location', JSON.stringify(pos));
                },
                (error) => {
                    alert(error);
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            );
        }
    }

    hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    }

    currencyToDouble(valor){
        return parseFloat(valor.replace('.', '').replace(',', '.').replace('R$ ', ''));
    }

    doubleToCurrency(valor) {
        return 'R$ ' + Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(valor);
    }

    onlyNumbers(valor) {
        return Number(valor.replace(/[^0-9]+/g,""));
    }

    mascaraCpf(valor) {
        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    }

    mascaraCelular(phone){
        return phone.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2$3-$4');
    }

    mascaraData(data){
        split = data.split('-');
        return split[1] + "/" +split[2]+"/"+split[0];
    }

}

const config = new Configuracoes();
export default config;