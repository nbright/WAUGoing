import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,

        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 5,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,

        // elevation: 10,
    },

    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    image: {
        flex: 5,
        aspectRatio: 1.4,
        resizeMode: 'cover',
    },

    card: {
        flex: 1.5,
        alignItems:'center',
        color: '#5b5b5b',
    },
    description: {
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
});

export default styles;
