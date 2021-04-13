import styled from 'styled-components/native'

/* ===================== [View] ======================*/

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const PatrimonyContainer = styled.View`
    align-items: center;
    border-radius: 5px;
    margin-top: 60px;
    margin-bottom: 40px;
`

export const StocksContainer = styled.View`
    background-color: #fff;
    height: 550px;
    border-radius: 10px;
    margin: 0 10px;
`

export const NavigationContainer = styled.View`
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 10px;

`
export const Border = styled.View`
    border-bottom-width: 1px;
    border-color: #9BA297;
    margin-bottom: 20px;
`

export const LineStockView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    border-bottom-width: 1px;
    padding-bottom: 10px;
    border-color: #9BA297;
`

export const HeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8px 0 8px;
`

/*================= [TEXT] ========================*/

export const AmountText = styled.Text`
    color: #fff;
    font-size: 40px;
    font-weight: bold;
`

export const Span = styled.Text`
    color: #EEF0EC;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    color: #646C60;
    font-size: 26px;
    padding: 10px;
    font-weight: bold;
`

export const ButtonText = styled.Text`
    font-size: 16px;
`

export const NameText = styled.Text`
    font-size: 20px;
    color: #E2A90A;
    font-weight: bold;
`

export const QuantityText = styled.Text`
    font-size: 20px;
    color: #E2A90A;
    font-weight: bold;
`

/* ================= Others ================== */

export const ScrollView = styled.ScrollView`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;

    border-top-width: 2px;
    border-color: #971A97;
`

export const Button = styled.TouchableOpacity`
    background-color: #D717D7;
    border-radius: 10px;
`
