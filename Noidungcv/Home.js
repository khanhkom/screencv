import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import backgr from './image/backgr.png';
import Khung1 from './khung1';
const { height, width } = Dimensions.get('window');
const data = require('./data.json');
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        this.setState(
            items = data.id1.dn
        )
    }
    render() {
        const { headerStyle, iconBackStyle, textHeadrStyle, iconNoteStyle, bodyStyle,
            tieudeStyle, tieudeStyle1, bodyStyle1, noidungStyle, buttomStyle, ketluanStyle } = styles;
        return (
            <View >
                <View style={headerStyle}>
                    <TouchableOpacity style={iconBackStyle}>
                        <Image source={require('./image/iconback.png')} style={{ height: 12, width: 12 }} />
                        <Text style={{ color: "white", fontSize: 12, marginLeft: 3, fontWeight: '500' }}>Trở về</Text>
                    </TouchableOpacity>
                    <View style={textHeadrStyle}>
                        <Text style={{ fontSize: 18, color: "white", fontFamily: 'Roboto', fontWeight: '500' }}>Nội dung công việc</Text>
                    </View>
                    <TouchableOpacity style={iconNoteStyle}>
                        <Text style={{ fontSize: 12, color: "white", fontWeight: '500' }}>Chỉnh sửa</Text>
                        <View style={{ marginLeft: 3 }}>
                            <   Image source={require('./image/pencil.png')} style={{ height: 12, width: 12 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={backgr} style={{ resizeMode: "stretch", width: '100%', height: '100%', }}>
                    <View style={{ height: (480 / 640) * height }}>
                        <View style={bodyStyle}>
                            <View style={tieudeStyle}>
                                <Text style={{ color: "#DA251D", fontSize: 15, fontWeight: '500' }}>{data.id1.td}</Text>
                            </View>
                            <Khung1 image={require('./image/lich.png')} heights={20 / 640} widths={20 / 360} marginLeftt={20 / 360} infor={data.id1.tg} ></Khung1>
                            <Khung1 image={require('./image/diadiem.png')} heights={20 / 640} widths={12 / 360} marginLeftt={15 / 360} infor={data.id1.dd} ></Khung1>
                            <Khung1 image={require('./image/thanhphan.png')} heights={20 / 640} widths={20 / 360} marginLeftt={8 / 360} infor={data.id1.tp} ></Khung1>
                        </View>
                        <View style={bodyStyle1}>
                            <View style={noidungStyle}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 0.92 * width, marginTop: (8 / 640) * height }}>
                                    <Text style={{ textDecorationLine: "underline", fontSize: 14, color: "#1C1C1C" }}>Nội dung</Text>
                                </View>
                                <View style={{ width: (322 / 360) * width, marginLeft: (9 / 360) * width, marginTop: (12 / 640) * height, height: (98 / 640) * height }}>
                                    <View>
                                        {data.id1.nd.map(item => {
                                            return (<Text key={item.id} style={{ color: "#1C1C1C", fontFamily: 'Roboto', fontSize: 15 }}>{item.id}</Text>)
                                        })}
                                    </View>
                                </View>
                            </View>
                            <View style={ketluanStyle}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 0.92 * width, marginTop: (8 / 640) * height }}>
                                    <Text style={{ textDecorationLine: "underline", fontSize: 14, color: "#1C1C1C", fontFamily: 'Roboto' }}>Kết luận</Text>
                                </View>
                                <View style={{ width: (322 / 360) * width, marginLeft: (9 / 360) * width, marginTop: (4 / 640) * height, height: (53 / 640) * height }}>
                                    <View >
                                        {data.id1.kl.map(item => {
                                            return (<Text key={item.id} style={{ color: "#1C1C1C", fontFamily: 'Roboto', fontSize: 15 }}>{item.id}</Text>)
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: (5 / 6) * width,
                        marginLeft: (1 / 12) * width,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderColor: "#DA251D",

                    }}>
                        <TouchableOpacity style={buttomStyle}>
                            <Text style={{ color: "white", fontSize: 15, fontFamily: 'Roboto' }}>Điểm danh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttomStyle}>
                            <Text style={{ color: "white", fontSize: 15, fontFamily: 'roboto' }}>Kiểm tra thực hiện</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}
