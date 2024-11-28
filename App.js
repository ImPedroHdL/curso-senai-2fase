import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './ScreensPrincipais/HomeScreen';
import { Avaliar } from './ScreensPrincipais/AvaliarScreen';
import { Manobras } from './ScreensPrincipais/ManobrasScreen';
import { CadastrarManobra } from './ScreensPrincipais/SubTelas/CadastrarManobraScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',

            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTintColor: 'white'

          }}></Stack.Screen>

        <Stack.Screen
          name="Avaliar"
          component={Avaliar}
          options={{
            title: 'Criar avaliação',
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTintColor: 'white'
          }}></Stack.Screen>

        <Stack.Screen
          name="Manobras"
          component={Manobras}
          options={{
            title: 'Visualizar manobras',
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTintColor: 'white'
          }}></Stack.Screen>

        <Stack.Screen
          name="cadastroManobras"
          component={CadastrarManobra}
          options={{
            title: 'Cadastrar manobra',
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTintColor: 'white'
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
