import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Header({navigation}) {

    function irParaCarrinho(){
        navigation.navigate("(Carrinho)")
    }

  return (
    <View>

      <TouchableOpacity onPress={irParaCarrinho}>
        <View>
          <Ionicons name="home" size={55} color={'#000'} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
