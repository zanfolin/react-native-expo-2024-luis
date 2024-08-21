// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const duplas = [
  { id: '1', nome1: 'Ana', nome2: 'Maria' },
  { id: '2', nome1: 'João', nome2: 'Pedro' },
  { id: '3', nome1: 'Carlos', nome2: 'Lucas' },
  { id: '4', nome1: 'Mariana', nome2: 'Lucas' },
  { id: '5', nome1: 'Carlos', nome2: 'Lucas' },
  { id: '6', nome1: 'Carlos', nome2: 'Lucas' },
  { id: '7', nome1: 'Carlos', nome2: 'Lucas' },
  { id: '8', nome1: 'Carlos', nome2: 'Lucas' },
  // Adicione mais duplas conforme necessário
];

export default function ProcurarDuplas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDuplas, setFilteredDuplas] = useState(duplas);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = duplas.filter(dupla =>
      dupla.nome1.toLowerCase().includes(query.toLowerCase()) ||
      dupla.nome2.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDuplas(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Duplas de Beach Tennis</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredDuplas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.topItem}>
              <Text style={styles.contador}>Dupla: </Text>
              <Text style={styles.contador}>{item.id}</Text>
            </View>
            <Text style={styles.itemText}>{item.nome1} & {item.nome2}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma dupla encontrada</Text>} showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 48,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#495057',
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
  topItem: {
    flexDirection: 'row',
    width: 420,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    top: -16,
  },
  contador: {
    fontSize: 23,
    fontWeight: '500',
    color: '#fff',
  },
});

