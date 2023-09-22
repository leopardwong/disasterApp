import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { Colors } from "../../constants/index";

const schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
    location: yup.string().required(),
    detail: yup.string(),
    contactInfo: yup.string(),
    urgency: yup.string(),
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
            // const docRef = await addDoc(
            //     collection(FIRESTORE_DB, TableNames.notifications),
            //     data
            // );
            // reset();
            // console.log("Document written with ID: ", docRef.id);

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
                    <Controller
                        control={control}
                        name="title"
                        defaultValue="Warning"
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Warning"
                                onChangeText={(text) => onChange(text)}
                                value={value}
                            />
                        )}
                    />
                    {errors?.title && (
                        <Text style={styles.error}>{errors.title.message}</Text>
                    )}
                    <Controller
                        control={control}
                        name="body"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Body"
                                onChangeText={(text) => onChange(text)}
                                value={value}
                            />
                        )}
                    />
                    {errors?.body && (
                        <Text style={styles.error}>{errors.body.message}</Text>
                    )}
                    <Controller
                        control={control}
                        name="location"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Location"
                                onChangeText={(text) => onChange(text)}
                                value={value}
                            />
                        )}
                    />
                    {errors?.location && (
                        <Text style={styles.error}>
                            {errors.location.message}
                        </Text>
                    )}
                    <TouchableOpacity
                        onPress={() => setIsCollapsed(!isCollapsed)}
                    >
                        <Text style={styles.button}>
                            {isCollapsed ? "Show Details" : "Hide Details"}
                        </Text>
                    </TouchableOpacity>
                    {!isCollapsed && (
                        <>
                            <Controller
                                control={control}
                                name="detail"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Detail"
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                    />
                                )}
                            />
                            {errors?.detail && (
                                <Text style={styles.error}>
                                    {errors.detail.message}
                                </Text>
                            )}
                            <Controller
                                control={control}
                                name="contactInfo"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Contact Info"
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                    />
                                )}
                            />
                            {errors?.contactInfo && (
                                <Text style={styles.error}>
                                    {errors.contactInfo.message}
                                </Text>
                            )}
                            <Controller
                                control={control}
                                name="urgency"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Urgency"
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                    />
                                )}
                            />
                            {errors?.urgency && (
                                <Text style={styles.error}>
                                    {errors.urgency.message}
                                </Text>
                            )}
                            <Controller
                                control={control}
                                name="severity"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Severity"
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                    />
                                )}
                            />
                            {errors?.severity && (
                                <Text style={styles.error}>
                                    {errors.severity.message}
                                </Text>
                            )}
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
