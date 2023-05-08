import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const Certificate = ({ name }) => {
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
    },
    subtitle: {
      fontSize: 18,
      textAlign: "center",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Certificate of Completion</Text>
          <Text style={styles.subtitle}>This certificate is awarded to:</Text>
          <Text style={{ fontSize: 24, textAlign: "center", marginTop: 20 }}>
            {name}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Certificate;
