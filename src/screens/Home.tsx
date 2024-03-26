import {
  Button,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const blusas = [
    {
      nome: "Moletom Preto",
      preco: 217.5,
      imagem: require("../../assets/moletom-preto.jpg"),
      componente: "moletom-preto",
    },
    {
      nome: "Moletom Branco",
      preco: 217.5,
      imagem: require("../../assets/moletom-branco.jpg"),
      componente: "moletom-branco",
    },
    {
      nome: "Blusa Branca",
      preco: 109.8,
      imagem: require("../../assets/blusa-branca.jpg"),
      componente: "blusa-branca",
    },
  ];
export function Blusas() {
    return(
        <FlatList
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          data={blusas}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text>{item.nome}</Text>
                      <Text>R$ {item.preco}</Text>
                    </View>
                    <View>
                      <Ionicons
                        name="pricetag-outline"
                        color={"#000"}
                        size={25}
                      />
                    </View>
                  </View>
                  <View style={styles.cardDown}>
                    <View>
                      <Image source={item.imagem}  />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
    )
}

export function Calcas() {
    return(
        <FlatList
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          data={calcas}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text>{item.nome}</Text>
                      <Text>R$ {item.preco}</Text>
                    </View>
                    <View>
                      <Ionicons
                        name="pricetag-outline"
                        color={"#000"}
                        size={25}
                      />
                    </View>
                  </View>
                  <View style={styles.cardDown}>
                    <View>
                      <Image source={item.imagem}  />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
    )
}

export default ({ navigation }) => {
  function irLogin() {
    navigation.navigate("(Login)");
  }

  return (
    <View style={styles.container}>



      <View style={styles.viewTitle}>
        <Text style={styles.title}>Outono até Inverno .</Text>
      </View>
      <View >
        <Text style={styles.subtitle}>Blusas</Text>
        <Blusas />
      </View>

        <View >
            <Text style={styles.subtitleCalca}>Calças</Text>
            <Calcas />
        </View>

    </View>
  );
};




const calcas = [
  {
    nome: "Calça Jeans",
    preco: 199.9,
    imagem: require("../../assets/calca-jeans.png"),
    componente: "calca-jeans",
  },
  {
    nome: "Calça Moletom",
    preco: 129.9,
    imagem: require("../../assets/calca-moletom.png"),
    componente: "calca-moletom",
  },
  {
    nome: "Calça Social",
    preco: 249.9,
    imagem: require("../../assets/calca-social.png"),
    componente: "calca-social",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    viewTitle: {
        marginBottom: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: "600",
        textAlign: "center",
    },

  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "right",
    marginBottom: 10,
  },
  subtitleCalca: {
    fontWeight: "500",
    paddingRight: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    width: 230,
    height: 350,
    backgroundColor: "#e6e4e4",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDown: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
