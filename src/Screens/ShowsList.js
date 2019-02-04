import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { H1 } from '../Components/Elements';
import ListShow from '../Components/ListShow';

class ShowsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: null
        }
    }

    componentDidMount() {
        this.GetAPI(false);
    }
    
    GetAPI = (data) => {
        const param = (data && data != '') ? data : 'all';
        fetch('http://api.tvmaze.com/search/shows?q=' + param, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then(async (responseJson) => {
            responseJson && this.setState({ dataSource: responseJson })
        }).catch((error) => {
            console.error(error);
        });
    }

    renderItem = ({item, index }) => {
        //console.log(item);
        return <ListShow { ...item.show } />
    }

    handleData = (data) => {
        this.GetAPI(data);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={ styles.header }><H1>My Shows</H1></Header>
                <Content style={{ width: '100%' }}>
                    <TextInput
                        placeholder="Seach for a show"
                        onChangeText={keyword => this.handleData(keyword)}
                        underlineColorAndroid='transparent' 
                        style={styles.quicksearch} />
                {
                    this.state.dataSource ? (
                        <FlatList 
                            data={ this.state.dataSource } 
                            renderItem={ this.renderItem }
                            keyExtractor={ (item, index) => 'list-' + index } />                        
                    ) : (
                        <View><Text>Nothing to display for now.</Text></View>
                    )
                }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    header: {
        height: 80,
        backgroundColor: '#cccccc'
    },
    quicksearch: {
        alignSelf: 'center',
        width: '90%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 10,
        marginBottom: 10,
        marginTop: 10
    }
});

export default ShowsList;