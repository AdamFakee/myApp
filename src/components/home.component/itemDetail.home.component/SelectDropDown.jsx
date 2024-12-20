
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    };

const SelectDropDown = ({data, value, setValue, isChoose, title, isChooseSize, setIsChooseSize, isChooseColor, setIsChooseColor}) => {
  return (
    <TouchableOpacity onPress={() => {
      setIsChooseSize(!isChooseSize);
      setIsChooseColor(!isChooseColor);
    }}>
      <Dropdown
        className={`h-[40px] bg-[#fff] w-[138px] rounded-[8px] px-[12px] py-[10px] ${isChoose ? 'border-[#F01F0E]' : ""}`}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        mode='default'
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={title}
        value={value}
        onChange={item => {
            setValue(item.value);
        }}
        renderItem={renderItem}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
export default SelectDropDown