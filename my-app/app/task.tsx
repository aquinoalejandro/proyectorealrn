import * as React from "react";
import { View, CheckBox } from "react-native";
import { useToast, VStack, HStack, Input, Text, Box, IconButton,Checkbox, Icon, Center, Heading } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";




const Task = () => {
    const instState = [{
      title: "Bañarse",
      isCompleted: true
    }, {
      title: "Ir al Polo",
      isCompleted: false
    }, {
      title: "Estudiar",
      isCompleted: false
    }, {
      title: "Dormir",
      isCompleted: false
    }];
    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState("");
    const toast = useToast();
  
    const addItem = (title: string) => {
      if (title === "") {
        toast.show({
          title: "Please Enter Text",
        });
        return;
      }
  
      setList(prevList => {
        return [...prevList, {
          title: title,
          isCompleted: false
        }];
      });
    };
  
    const handleDelete = (index: number) => {
      setList(prevList => {
        const temp = prevList.filter((_, itemI) => itemI !== index);
        return temp;
      });
    };
  
    const handleStatusChange = (index: number) => {
      setList(prevList => {
        const newList = [...prevList];
        newList[index].isCompleted = !newList[index].isCompleted;
        return newList;
      });
    };
  
    return (
    <View>
      <Center w="100%">
          <Box maxW="300" w="100%">
            <Heading mb="2" size="md">
              To Do List
            </Heading>
            <VStack space={4}>
              <HStack space={2}>
                <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
                <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
                addItem(inputValue);
                setInputValue("");
              }} />
              </HStack>
              <VStack space={2}>
                {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                    <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
                    <Text w="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                  color: item.isCompleted ? "gray.400" : "coolGray.800"
                }} _dark={{
                  color: item.isCompleted ? "gray.400" : "coolGray.50"
                }} onPress={() => handleStatusChange(itemI)}>
                      {item.title}
                    </Text>
                    <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
                  </HStack>)}
              </VStack>
            </VStack>
          </Box>
        </Center>
        <Text></Text>
      </View>
  )};
  
export default Task;