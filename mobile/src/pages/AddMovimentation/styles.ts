import { Platform } from 'react-native'
import styled from 'styled-components/native'

/* ===================== [View] ======================*/

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`
export const FormContainer = styled.View``


export const NavigationContainer = styled.View`
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 15px;

`
export const Border = styled.View`
    border-bottom-width: 2px;
    border-color: #fff;
    margin-bottom: 20px;
`

export const InputView = styled.View`
    margin: 20px 10px;
`

export const Input = styled.TextInput`
    color: #000;
    background-color: #fff;
    font-size: 20px;
    border-radius: 10px;
`

export const LogoView = styled.View`
    align-items: center;
    margin-bottom: 20px;
`

/*================= [TEXT] ========================*/

export const BackText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`

export const InputText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const TitleLogoText = styled.Text`
    color: #fff;
    font-size: 35px;
    font-weight: bold;
`

export const EnterpriseText = styled.Text`
    color: #fff;
    font-size: 15px;
`

/* ================= Button ================== */

export const Button = styled.TouchableOpacity`
    background-color: #D717D7;
    border-radius: 10px;
    height: 50px;
    width: 250px;
    align-items: center;
    justify-content: center;
`

export const BackToDashboardButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 15px;
`

export const ScrollView = styled.ScrollView``