import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H2, H3, Strong } from '../Components/Elements';

class ShowData extends Component {
    constructor(props){
        super(props);
        this.state = {
            idShow: null,
            dataSource: null
        }
    }

    componentDidMount(){
        if(this.props.navigation.state.params != undefined){
            this.setState({
                idShow: (this.props.navigation.state.params.id) ? this.props.navigation.state.params.id : null
            },() =>{
                //console.log(this.state);
                this.GetAPI();
            }); 
        }
    }

    GetAPI = () => {
        fetch('http://api.tvmaze.com/shows/' + this.state.idShow, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then(async (responseJson) => {
            responseJson && this.setState({dataSource: responseJson});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <Container>
            {
                this.state.idShow && this.state.dataSource ? (
                    <Content style={{ width: '100%' }}>
                    <Header style={ styles.header }><H2>{ this.state.dataSource.name }</H2></Header>
                    <Grid style={ styles.infosTable }>
                        {
                        this.state.dataSource.image && (
                            <Row><Image style={ styles.image } source={{uri: this.state.dataSource.image.original}} /></Row>
                        )   
                        }                                                 
                        <Row style={ styles.row }>
                            <Col size={ 30 }><Text>Language</Text></Col>
                            <Col size={ 70 }><Strong>{ this.state.dataSource.language }</Strong></Col>
                        </Row>
                        <Row style={ styles.row }>
                            <Col size={ 30 }><Text>Premiered</Text></Col>
                            <Col size={ 70 }><Strong>{ this.state.dataSource.premiered }</Strong></Col>
                        </Row>
                        <Row style={ styles.row }>
                            <Col size={ 30 }><Text>Summary</Text></Col>
                            <Col size={ 70 }><Strong>{ this.state.dataSource.summary }</Strong></Col>
                        </Row>
                    </Grid>
                    </Content>
                ) : (
                    <View><Text>Nothing to display for now.</Text></View>
                )
            }             
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    infosTable: {
        marginTop: 10,
        padding: 10
    },
    header: {
        height: 70,
        backgroundColor: '#cccccc'
    },
    row: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200
    }
});

export default ShowData;