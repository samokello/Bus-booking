import React from "react";
import { View, Text,StyleSheet ,ScrollView} from "react-native";

const Terms = () => {
	return (
<ScrollView>
		<View style={styles.container}>
			<Text style={styles.ticket}>TICKET CONDITIONS :</Text>
			<Text style={styles.ticketInfor}>
				This ticket is valid for the time and date of travel only. The ticket
				cannot be altered, resold, transferred or refunded. If for any reason
				the holder fails to report before departure time, the company accepts no
				responsibility for such passenger. The ticket is treated as used if the
				holder fails to utilize it as indicated there on. The ticket holder must
				report at the booking office 30 minutes before the time specific on the
				ticket. Drinking any alcohol, chewing miraa or smoking in the coach is
				prohibited. Luggage carried at owner’s risk. The company cannot be held
				responsible for damage, losses or delay. Passengers are to take care of
				their own luggage. 20kgs of luggage is allowed free. Additional will be
				accepts on charge if space permits The management reserves the right to
				change the coach without prior notice or refund. If in case a passenger
				breaks his journey en-route no refund shall be made A passenger is
				allowed free one baby only. Age limit 5 yrs. Passengers are requested to
				ensure correctness of the booking office as mistakes cannot be rectified
				later. Strictly no luggage should be passed through the window. The
				passenger should ensure that the amount paid is clearly indicated on the
				ticket as per oneâ€™s destination. Time and date of booking should
				appear clearly on the ticket.
			</Text>
			<View>
				<Text style={styles.ticket}>CONDITIONS OF CARRIAGE FOR PARCELS :</Text>
				<Text style={styles.ticketInfor}>
					Goods are carried under subject to the company’s condition of carriage
					and this receipt constitute contract between the sender and/or owner
					of the goods and the company. The condition of the carriage is
					displayed at the carrier’s office copies of which can be obtained on
					application to the office of the carrier.
				</Text>
			</View>
		</View>
        </ScrollView>
	);
};
export default Terms;

const styles=StyleSheet.create({
    container: {
        padding:10,

    },

    ticket:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    ticketInfor:{
        backgroundColor:"#0E8769",
        borderRadius:5,
        padding:10,
        color:"#fff"
    }
    
})