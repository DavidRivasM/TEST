import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoPermisoConfirmacionCatequesis = (props) => {

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });

  // Styles register
  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight: "2px"
    },
    titleText: {
      fontSize: "25px",
      margin: "auto",
      color: 'gray',
      fontFamily: "GreatVives"
    },
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    table1: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      right: "50px",
      bottom: "300px"
    },
    table2: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      left: "50px",
      bottom: "300px"
    }
  });

  return (
    <>
      <Document >
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "justify",

        }}>
          <View id="Post">
            <Image
              src={escudocuria}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "630px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "630px", right: "1px" }}
            />

            <Text style={styles.titleText}>Di??cesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={styles.boldText}>PERMISO PARA MATR??CULA DE CATEQUESIS/CONFIRMACI??N</Text>
            <Text style={styles.boldText}>EN OTRA PARROQUIA</Text>


            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>A {props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Cura Parroco</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>{props.parroquiaDestinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Estimado presb??tero,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Por la presente es mi deseo saludarlo y desearle Paz y Bien en su Ministerio Sacerdotal. El Suscrito, Pbro. {props.cura}, Cura P??rroco de {props.parroquia}, autorizo a los familiares del joven:</Text>

            <Text style={styles.boldText}>{props.personaSolicitante}</Text>
            <Text style={styles.boldText}>C??dula: {props.cedPersonaSolicitante}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Quien es vecino y feligr??s de esta comunidad parroquial; para que realice en su parroquia, en {props.direccionParroquia}, la matr??cula para el proceso de catequesis para ni??os y adolescentes, a petici??n de sus padres {props.padrePersonaSolicitante} y {props.madrePersonaSolicitante}; quienes han dado las siguientes razones: {props.razon}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>

            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>________________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Cura P??rroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Diocesis de Alajuela</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electr??nico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Direcci??n: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoPermisoConfirmacionCatequesis;