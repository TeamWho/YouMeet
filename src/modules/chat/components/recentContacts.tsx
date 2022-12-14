import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ContactBadge from './contactBadge';

const mockedContacts = [
    {
        name: 'Search',
        iconName: 'search',
    },
    { 
        name: 'Colt',
        iconName: 'ra',
        iconColor: 'orange',
    },
    { 
        name: 'Myra',
        iconName: 'gitlab',
        iconColor: 'pink',
    },
    { 
        name: 'Dina',
        iconName: 'reddit-alien',
        iconColor: 'red',
    },
    { 
        name: 'Luke',
        iconName: 'skype',
        iconColor: 'blue',
    },
];

const RecentContacts = () => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(it) => it.name}
                data={mockedContacts}
                renderItem={({ item }) => <ContactBadge name={item.name} iconName={item.iconName} iconColor={item.iconColor} />}
            />
        </View>
    );
};

export default RecentContacts;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
    }
});