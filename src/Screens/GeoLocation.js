import React,{useState,useRef} from "react";
import MapView ,{Marker}from "react-native-maps";
import { View,StyleSheet ,Text} from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAP_API from "../../GoogleApiKey"

const GeoLocation=()=> {
  const [state,setState]=useState({
pickupCords:{
  latitude:30.7846,
  longitude:76.7179,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
},
droplocationCords:{
latitude:30.7333,
longitude:76.7794,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
}

  })
const mapRef=useRef(0)
  const {pickupCords,droplocationCords}=state
return(
<View style={styles.container}>
<MapView
    style={StyleSheet.absoluteFill}
    initialRegion={pickupCords}
    ref={mapRef}
    >

      <Marker
        coordinate={pickupCords}
            />

<Marker
       coordinate={droplocationCords}
         />

<MapViewDirections
origin={pickupCords}
destination={droplocationCords}
apiKey={GOOGLE_MAP_API}
strokeWidth={3}
strokeColor="red"
optimizeWaypoints={true}
onReady={result=>{
  mapRef.current.fitToCoordinates(result.coordinates,{edgePadding:{
    right:30,
    bottom:300,
    top:100
  }})
}}

/>
      </MapView>


</View>
)
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor:"red"
}

})

export default GeoLocation;