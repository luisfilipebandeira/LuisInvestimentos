import React, { useEffect, useState } from 'react'

import {
    Container,
    PatrimonyContainer, 
    AmountText, 
    Span, 
    StocksContainer, 
    Title, 
    ScrollView, 
    NavigationContainer, 
    Border,
    Button,
    NameText,
    QuantityText,
    LineStockView,
    HeaderView    
} from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

import {useNavigation} from '@react-navigation/native'
import api from '../../services/api'

interface Stocks {
    id: string
    name: string
    value: number
    quantity: number
}

interface Balance{
    getBalance: number
}

const Dashboard: React.FC = () => {
    const [stocks, setStocks] = useState<Stocks[]>([]);
    const [balance, setBalance] = useState<Balance>({} as Balance);

    useEffect(() => {
        async function loadStocks(): Promise<void>{
            const response = await api.get('stocks')

            setStocks(response.data.getStocks)
            setBalance(response.data)
        }

        loadStocks()
    }, [balance])

    const navigation = useNavigation()

    return (
        <>
        <Container>
            <PatrimonyContainer>
                <AmountText>R$ {balance.getBalance}</AmountText>
                <Span>De Patrimônio investido</Span>
            </PatrimonyContainer>
            <Border></Border>
            <StocksContainer>
                <HeaderView>
                    <Title>Ativos</Title>
                    <Title>Qtde</Title>
                </HeaderView>
                <ScrollView>
                    {stocks.map(stock => 
                        <LineStockView key={stock.id}>
                            <NameText>{stock.name}</NameText><QuantityText>{stock.quantity}</QuantityText>
                        </LineStockView>    
                    )}
                </ScrollView>
            </StocksContainer>
            <NavigationContainer>
                <Button onPress={() => navigation.navigate('AddMovimentation')}>
                    <Icon name="add" size={60} color="#fff" />
                </Button>
            </NavigationContainer>
        </Container>
        </>
    )
}

export default Dashboard