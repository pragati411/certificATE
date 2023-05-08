import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({ family: "Roboto" });

const CertificateMaker = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      padding: 30,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Roboto",
    },
    subtitle: {
      fontSize: 18,
      textAlign: "center",
      fontFamily: "Roboto",
    },
    input: {
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      fontSize: 20,
      margin: "20px auto",
      width: "100%",
      textAlign: "center",
      fontFamily: "Roboto",
    },
    image: {
      width: "100%",
      height: "auto",
      margin: "20px auto",
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          style={styles.input}
        />
      </form>
      {name && (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Certificate of Completion</Text>
              <Text style={styles.subtitle}>
                This certificate is awarded to:
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  marginTop: 20,
                  fontFamily: "Roboto",
                }}
              >
                {name}
              </Text>
              <Image src="/certificate.png" style={styles.image} />
            </View>
          </Page>
        </Document>
      )}
    </div>
  );
};

export default CertificateMaker;
