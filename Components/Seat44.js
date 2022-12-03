import React, { useRef, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Context } from "../context/BusContext";
import Mpesa from "../Components/M-pesa";

const Fouty4Seater = () => {
  const { busState, loader, busData, total } = useContext(Context);

  const [singleBus, setSingleBus] = busState;
  const [fetchData, setFetchData] = busData;
  const [totalPrice, setTotalPrice] = total;

  useEffect(() => {
    if (selectedSeat.length > 0) {
      setShowBottomSheet(true);
      setTotalPrice(selectedSeat.length * fetchData[singleBus].price)
    } else {
      setShowBottomSheet(false);
    }
  });
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const seatRef = useRef([
    "seat1",
    "seat2",
    "seat3",
    "seat4",
    "seat5",
    "seat6",
    "seat7",
    "seat8",
    "seat9",
    "seat10",
    "seat11",
    "seat12",
    "seat13",
    "seat14",
    "seat15",
    "seat16",
    "seat17",
    "seat18",
    "seat19",
    "seat20",
    "seat21",
    "seat22",
    "seat23",
    "seat24",
    "seat25",
    "seat26",
    "seat27",
    "seat28",
    "seat29",
    "seat30",
    "seat31",
    "seat32",
    "seat33",
    "seat34",
    "seat35",
    "seat36",
    "seat37",
    "seat38",
    "seat39",
    "seat40",
    "seat41",
    "seat42",
    "seat43",
    "seat44",
    "seat45",
    "seat46",
  ]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [bottomSheet, setBottomSheet] = useState(false);

  const handleseat = (e, index) => {
    const seat =
      seatRef.current[index]._internalFiberInstanceHandleDEV.memoizedProps
        .children;

    if (selectedSeat.includes(seat)) {
      const cloneSelectedSeat = [...selectedSeat];
      cloneSelectedSeat.splice(cloneSelectedSeat.indexOf(seat), 1);
      setSelectedSeat(cloneSelectedSeat);
    } else {
      setSelectedSeat((prev) => [...prev, seat]);
    }


  };

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  seatRef.selectedSeat;
  
  return (
    <View >
      <View>
        <Text style={styles.pickSeat}>Pick a seat</Text>
      </View>

      <View style={styles.seatsState}>
        <View style={styles.seatsCocnditions}>
          <View style={styles.seatBooked}>
            <Image
              source={require("../assets/Seats/normal.png")}
              style={styles.SeatImages}
            />
          </View>
          <Text>Available</Text>
        </View>

        <View style={styles.seatsCocnditions}>
          <View style={styles.seatBooked}>
            <Image
              source={require("../assets/Seats/selected.png")}
              style={styles.SeatImages}
            />
          </View>
          <Text>Selected</Text>
        </View>

        <View style={styles.seatsCocnditions}>
          <View style={styles.seatBooked}>
            <Image
              source={require("../assets/Seats/booked.png")}
              style={styles.SeatImages}
            />
          </View>
          <Text>Boocked</Text>
        </View>
      </View>


<View style={styles.mpesa}>
<Mpesa  />
</View>
      <View>
        <>
          <View style={styles.container}>
            <View style={styles.container1}>
              <View>
                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 0)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("1")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[0] = item)}
                    >
                      1
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 1)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("2")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[1] = item)}
                    >
                      2
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.door}>
                  <Text style={styles.doorText}>DOOR</Text>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 2)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("3")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[2] = item)}
                    >
                      3
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 3)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("4")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[3] = item)}
                    >
                      4
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 4)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("5")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[4] = item)}
                    >
                      5
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 5)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("6")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[5] = item)}
                    >
                      6
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 6)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("7")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[6] = item)}
                    >
                      7
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 7)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("8")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[7] = item)}
                    >
                      8
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 8)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("9")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[8] = item)}
                    >
                      9
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 9)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("10")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[9] = item)}
                    >
                      10
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 10)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("11")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[10] = item)}
                    >
                      11
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 11)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("12")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[11] = item)}
                    >
                      12
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 12)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("13")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[12] = item)}
                    >
                      13
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 13)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("14")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[13] = item)}
                    >
                      14
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 14)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("15")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[14] = item)}
                    >
                      15
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 15)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("16")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[15] = item)}
                    >
                      16
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 16)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("17")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[16] = item)}
                    >
                      17
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 17)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("18")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[17] = item)}
                    >
                      18
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 18)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("19")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[18] = item)}
                    >
                      19
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 19)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("20")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[19] = item)}
                    >
                      20
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.leftSeaters}>
                <View style={styles.steering}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 45)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("46")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[45] = item)}
                    >
                      46
                    </Text>
                  </TouchableOpacity>

                  <Image
                    source={require("../assets/steering.png")}
                    style={styles.SeatImages}
                  />
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 44)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("45")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[44] = item)}
                    >
                      45
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 43)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("44")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[43] = item)}
                    >
                      44
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 42)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("43")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[42] = item)}
                    >
                      43
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 41)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("42")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[41] = item)}
                    >
                      42
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 40)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("41")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[40] = item)}
                    >
                      41
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 39)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("40")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[39] = item)}
                    >
                      40
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 38)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("39")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[38] = item)}
                    >
                      39
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 37)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("38")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[37] = item)}
                    >
                      38
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 36)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("37")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[36] = item)}
                    >
                      37
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 35)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("36")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[35] = item)}
                    >
                      36
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 34)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("35")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[34] = item)}
                    >
                      35
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 33)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("34")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[33] = item)}
                    >
                      34
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 32)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("33")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[32] = item)}
                    >
                      33
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 31)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("32")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[31] = item)}
                    >
                      32
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 30)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("31")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[30] = item)}
                    >
                      31
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 29)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("30")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[29] = item)}
                    >
                      30
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 28)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("29")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[28] = item)}
                    >
                      29
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 27)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("28")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[27] = item)}
                    >
                      28
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seatFlex}>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 26)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("27")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[26] = item)}
                    >
                      27
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.seats}
                    onPress={(e) => handleseat(e, 25)}
                  >
                    <Image
                      source={
                        selectedSeat.includes("26")
                          ? require("../assets/Seats/selected.png")
                          : require("../assets/Seats/normal.png")
                      }
                      style={styles.SeatImages}
                    />

                    <Text
                      style={styles.seatNumber}
                      ref={(item) => (seatRef.current[25] = item)}
                    >
                      26
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.seatFlex}>
              <TouchableOpacity
                style={styles.seats}
                onPress={(e) => handleseat(e, 20)}
              >
                <Image
                  source={
                    selectedSeat.includes("21")
                      ? require("../assets/Seats/selected.png")
                      : require("../assets/Seats/normal.png")
                  }
                  style={styles.SeatImages}
                />

                <Text
                  style={styles.seatNumber}
                  ref={(item) => (seatRef.current[20] = item)}
                >
                  21
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.seats}
                onPress={(e) => handleseat(e, 21)}
              >
                <Image
                  source={
                    selectedSeat.includes("22")
                      ? require("../assets/Seats/selected.png")
                      : require("../assets/Seats/normal.png")
                  }
                  style={styles.SeatImages}
                />

                <Text
                  style={styles.seatNumber}
                  ref={(item) => (seatRef.current[21] = item)}
                >
                  22
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.seats}
                onPress={(e) => handleseat(e, 22)}
              >
                <Image
                  source={
                    selectedSeat.includes("23")
                      ? require("../assets/Seats/selected.png")
                      : require("../assets/Seats/normal.png")
                  }
                  style={styles.SeatImages}
                />

                <Text
                  style={styles.seatNumber}
                  ref={(item) => (seatRef.current[22] = item)}
                >
                  23
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.seats}
                onPress={(e) => handleseat(e, 23)}
              >
                <Image
                  source={
                    selectedSeat.includes("24")
                      ? require("../assets/Seats/selected.png")
                      : require("../assets/Seats/normal.png")
                  }
                  style={styles.SeatImages}
                />

                <Text
                  style={styles.seatNumber}
                  ref={(item) => (seatRef.current[23] = item)}
                >
                  24
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.seats}
                onPress={(e) => handleseat(e, 24)}
              >
                <Image
                  source={
                    selectedSeat.includes("25")
                      ? require("../assets/Seats/selected.png")
                      : require("../assets/Seats/normal.png")
                  }
                  style={styles.SeatImages}
                />

                <Text
                  style={styles.seatNumber}
                  ref={(item) => (seatRef.current[24] = item)}
                >
                  25
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </View>

      {showBottomSheet && (
        <BottomSheetModalProvider>
          <View style={styles.shadowProp}>
            <Text style={styles.totalprice}>
              Total Price:{" "}
              <Text style={styles.totalKsh}>
                {" "}
                Ksh. {totalPrice}
              </Text>
            </Text>

            <TouchableOpacity style={styles.payment}>
              <Text style={styles.payText}>Proceed to payment</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModalProvider>
      )}
    </View>
  );
};

export default Fouty4Seater;

const styles = StyleSheet.create({
  seats: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    margin: 3,
    position: "relative",
  },
  seatFlex: {
    display: "flex",
    flexDirection: "row",
  },

  container: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 40,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
    position: "relaive",

  },
  container1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  leftSeaters: {
    marginLeft: 45,
    paddingTop: 20,
  },
  steering: {
    width: 30,
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  seatsState: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    width: "80%",
    alignSelf: "center",
  },
  seatBooked: {
    width: 20,
    height: 30,
  },
  seatsCocnditions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pickSeat: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 35,
  },
  SeatImages: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  door: {
    backgroundColor: "#0E8769",
    height: 30,
    width: 50,
    margin: 10,
  },
  doorText: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "center",
    marginTop: "15%",
  },
  seatNumber: {
    position: "absolute",
    top: 10,
    left: "33%",
  },
  seatCounter: {
    width: "90%",
    backgroundColor: "#0E8769",
    padding: 10,
    alignSelf: "center",
  },

  shadowProp: {
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    height: 100,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    position:"absolute",
    top:"100%",
    width:"100%",
    zIndex: "100%",

    
  },
  payment: {
    display: "flex",
    backgroundColor: "#0E8769",
    width: "40%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  payText: {
    color: "#fff",
    padding: 5,
  },
  totalprice: {
    padding: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  totalKsh: {
    color: "green",
  },
  mpesa:{
    zIndex:"100%",
    position: "absolute",
    top:"20%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    height:"70%",
    // display:"none"

  },
 
});
