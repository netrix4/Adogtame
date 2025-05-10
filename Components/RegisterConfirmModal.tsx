import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function RegisterConfirmModal(isVisible: boolean) {
  return (
    <Modal visible={isVisible} style={styles.wholeCardContainer}>
      <Text>RegisterConfirmModal</Text>
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptText}>Aceptar</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wholeCardContainer: {
    borderRadius: 15,
    backgroundColor: "white",
  },
  acceptButton: {
    backgroundColor: "#F28C28",
  },
  acceptText: {
    color: "white",
  },
});
