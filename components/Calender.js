import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Dates from "react-native-dates";
import { School } from "../context";
const Calender = () => {
  const {
    focus,
    startDate,
    endDate,
    isDateBlockedFunc,
    onDatesChangeFunc,
    data,
  } = useContext(School);
  return (
    <View style={styles.container}>
      <Dates
        onDatesChange={onDatesChangeFunc}
        isDateBlocked={isDateBlockedFunc}
        startDate={startDate}
        endDate={endDate}
        focusedInput={focus}
        range
      />{console.log(data,'#$%^&*(')}
      {data.length > 0 ? (
        <ScrollView>
          <View style={{ borderColor: "#009387", padding: 5 }}>
            {data.map((item) => {
              return (
                <View style={styles.mainList}>
                  <Text style={styles.textStyle}>{item.Attendance_Date}</Text>
                  <Text style={styles.textStyle}>{item.Subject}</Text>
                  <Text style={styles.textStyle}>{item.Teacher}</Text>
                  <Text style={styles.textStyle}>{item.Type}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ width: "100%", textAlign: "center" }}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 20,
  },
  date: {
    marginTop: 50,
  },
  focused: {
    color: "#009378",
  },
  mainList: {
    backgroundColor: "#009387",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  textStyle: { fontWeight: "100", color: "#fff" },
});
