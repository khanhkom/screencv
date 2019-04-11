import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Khung1 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            widths: 0.05,
            heights: 0.03,
            marginLeftt: 0.05,
        })
    }
    componentDidMount() {
        this.setState = ({
            widths: this.props.widths,
            heights: this.props.heights,
            marginLeftt: this.props.marginLeftt
        })
    }
    render() {
        const { tieudeStyle1 } = styles;
        return (
            <View style={tieudeStyle1}>
                <View style={{ marginLeft: (5 / 360) * width }}>
                    < Image source={this.props.image} style={{ height: this.props.heights*height, width: this.props.widths*width }} />
                </View>
                <View style={{ marginLeft: this.props.marginLeftt*width }}>
                    <Text style={{ color: "#1C1C1C", fontWeight: '500' }}>{this.props.infor}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tieudeStyle1: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 13,
        flexDirection: "row",
        marginTop: (12 / 640) * height,
    },
})