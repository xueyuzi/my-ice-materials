import React, { Component } from 'react';

const brandlist = [
    'https://img.alicdn.com/tfs/TB14.LkieuSBuNjy1XcXXcYjFXa-226-78.png',
    'https://img.alicdn.com/tfs/TB1LgSMibuWBuNjSszgXXb8jVXa-206-72.png',
    'https://img.alicdn.com/tfs/TB1jFDwiamWBuNjy1XaXXXCbXXa-284-56.png',
    'https://img.alicdn.com/tfs/TB147fnikSWBuNjSszdXXbeSpXa-180-68.png',
    'https://img.alicdn.com/tfs/TB1fdJliDtYBeNjy1XdXXXXyVXa-208-78.png',
];

export default class FollowList extends Component {
    static displayName = 'BrandList';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.titleWrapper}>
                    <h4 style={styles.title}>欢迎关注我们</h4>
                    <div style={styles.titleLine}>
                        <div style={styles.titleHighlightLine} />
                    </div>
                </div>
                <div style={styles.brandListWrapper}>
                    {brandlist.map((item, index) => {
                        return (
                            <div style={styles.brandItem} key={index}>
                                <img src={item} alt="" style={styles.brandImage} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 60,
        marginTop: '-88px',
        overflow: 'hidden',
    },
    titleWrapper: {
        marginTop: 60,
    },
    titleLine: {
        width: 140,
        height: 2,
        marginTop: 17,
        background: '#eee',
        borderLeft: '2px solid ##5fb2f8',
    },
    titleHighlightLine: {
        background: '#3080FE',
        height: 2,
        width: 33,
    },
    title: {
        color: '#223C4E',
        fontSize: 36,
    },
    desc: {
        color: '#6D7A82',
        fontSize: 16,
        lineHeight: 1.5,
        marginTop: 24,
        width: 525,
        textAlign: 'center',
    },
    brandListWrapper: {
        marginTop: 75,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: 1150,
    },
    brandItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 150,
        maxHeight: 40,
        padding: '0 20px',
        marginBottom: 60,
    },
    brandImage: {
        width: 'auto',
        height: 'auto',
        maxWidth: 150,
        maxHeight: 40,
    },
    extraButton: {
        borderColor: '#3080FE',
        background: 'transparent',
        color: '#3080FE',
    },
};
