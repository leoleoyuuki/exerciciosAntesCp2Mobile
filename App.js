import { StyleSheet,View, Text, SafeAreaView } from 'react-native';
import { Routes } from './src/routes';
import Header from './components/Header'
export default function App() {
  return (
    <>
      <Header/>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
