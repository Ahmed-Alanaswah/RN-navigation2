import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("DetailScreen", {
        categoryId: itemData.item.id,
      });
    }
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      ingredients: item.ingredients,
    };
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
