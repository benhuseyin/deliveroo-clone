import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* {Category Card} */}

        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 3"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 4"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 5"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 6"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TestImg 7"/>
    </ScrollView>
  )
}

export default Categories