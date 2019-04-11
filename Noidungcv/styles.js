import {StyleSheet,Dimensions} from 'react-native';
const {height,width} = Dimensions.get('window')
export  default styles = StyleSheet.create({
    headerStyle: {
        height: (46 / 640) * height,
        width: width,
        flexDirection: 'row',
        backgroundColor: '#DA251D',
        justifyContent: 'center',
        alignItems: "center",
    },
    iconBackStyle: {
        height: 0.04 * height,
        width: 0.25 * width,
        backgroundColor: '#DA251D',
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    textHeadrStyle: {
        width: 0.5 * width,
        height: height,
        justifyContent: 'center',
        alignItems: "center"
    },
    iconNoteStyle: {
        height: 0.04 * height,
        width: 0.25 * width,
        backgroundColor: '#DA251D',
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    bodyStyle: {
        width: (286 / 360) * width,
        marginLeft: (37 / 360) * width,

    },
    tieudeStyle: {
        backgroundColor: "white",
        padding: 5,
        justifyContent: "center",
        borderRadius: 13,
        flexDirection: "row",
        marginTop: (12 / 640) * height,
    },
    tieudeStyle1: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 13,
        flexDirection: "row",
        marginTop: (12 / 640) * height,
    },
    bodyStyle1: {
        width: (339/360) * width,
        marginLeft: (7/240) * width,

    },
    noidungStyle: {
        backgroundColor: "white",
        //justifyContent: "center",
        borderRadius: 13,
        height:(150/640)*height,
        marginTop: (12/640) * height,
    },
    ketluanStyle: {
        backgroundColor: "white",
        //justifyContent: "center",
        borderRadius: 13,
        height:(94/640)*height,
        marginTop: (12/640) * height,
    },
    buttomStyle: {
        backgroundColor: "#DA251D",
        alignItems: "center",
        justifyContent: "center",
        height:(32/640)*height,
        width: (144/360) * width,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#DDDDDD",
    }
})
