import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Toast from "react-native-toast-message";
import * as yup from "yup";
import Navbar from "../../components/Navbar/Navbar.js";
import { Colors, TableNames } from "../../constants/index";
import { FIRESTORE_DB } from "../../utils/firebaseConfig";

const schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
    location: yup.string().required(),
    detail: yup.string(),
    contactInfo: yup.string(),
    // urgency: yup.string(),
    severity: yup.string(),
});

const AdminPanel = ({ navigation }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const showToaster = (title, message) => {
        Toast.show({
            type: "disasterToast",
            text1: title,
            text2: message,
            autoHide: false,
            onPress: () => {
                Toast.hide();
                navigation.goBack();
            },
        });
    };

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const docRef = await addDoc(
                collection(FIRESTORE_DB, TableNames.notifications),
                { ...data, createdAt: new Date().toISOString() }
            );
            reset();
            console.log("Document written with ID: ", docRef.id);

            const message = `${data.body} in ${data.location ?? "Canada"}`;
            // schedulePushNotification(
            //     data.title,
            //     message
            // );

            showToaster(data.title, message);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const FormField = ({ name, defaultValue, placeholder }) => (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        onChangeText={(text) => onChange(text)}
                        value={value}
                    />
                )}
            />
            {errors[name] && (
                <Text style={styles.error}>{errors[name].message}</Text>
            )}
        </>
    );

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <Navbar
                    title="Admin"
                    titleColor={Colors.main_green}
                    leadingView={
                        <Pressable onPress={() => navigation.goBack()}>
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                color={Colors.main_green}
                            />
                        </Pressable>
                    }
                />
                <View style={styles.container}>
                    <FormField
                        name="title"
                        defaultValue="Warning"
                        placeholder="Warning"
                    />
                    <FormField name="body" defaultValue="" placeholder="Body" />
                    <FormField
                        name="location"
                        defaultValue=""
                        placeholder="Location"
                    />
                    <TouchableOpacity
                        onPress={() => setIsCollapsed(!isCollapsed)}
                    >
                        <Text style={styles.button}>
                            {isCollapsed ? "Show Details" : "Hide Details"}
                        </Text>
                    </TouchableOpacity>
                    {!isCollapsed && (
                        <>
                            <FormField
                                name="detail"
                                defaultValue=""
                                placeholder="Detail"
                            />
                            <FormField
                                name="severity"
                                defaultValue=""
                                placeholder="Severity"
                            />
                        </>
                    )}
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AdminPanel;

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.status_bar_color,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        color: "blue",
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    submitButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
});
