import Styles from "./taxi-details.module.scss";

export default function TaxiDetails() {
  return (
    <>
      <table className={`${Styles.tableContainer}`}>
        <thead className={`${Styles.tableHead}`}>
          <tr>
            <td className={`${Styles.headContent}`}>Name</td>
            <td className={`${Styles.headContent}`}>Phone Number</td>
            <td className={`${Styles.headContent}`}>Routes</td>
          </tr>
        </thead>
        <tbody className={`${Styles.tableBody}`}>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Mamashela</ul>
              <ul className={`${Styles.list}`}>Mpho Mamashela</ul>
            </td>
            <td className={`${Styles.headContent}`}>072 316 3877</td>
            <td className={`${Styles.headContent}`}>
              Krugersdorp, Ruimsig, Northriding, Fourways, Midrand, Kempton
              Park, Centurion
            </td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Humphries</ul>
              <ul className={`${Styles.list}`}>Phindile</ul>
            </td>
            <td className={`${Styles.headContent}`}>078 934 8142</td>
            <td className={`${Styles.headContent}`}>
              Eastgate - Braamfontein - Flora Centre Westgate - Cradlestone
            </td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Papa Jackie</ul>
            </td>
            <td className={`${Styles.headContent}`}>083 558 8337</td>
            <td className={`${Styles.headContent}`}>
              Soweto - Joburg South - Naturena - Meredale Ormonde - Lenasia -
              Ennerdale
            </td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>TM Destinations</ul>
              <ul className={`${Styles.list}`}>Thapelo</ul>
              <ul className={`${Styles.list}`}>Andile</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>079 145 9989</ul>
              <ul className={`${Styles.list}`}>082 547 2728</ul>
              <ul className={`${Styles.list}`}>079 331 7375</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              Hartebees - Brits - Mabo-Rankua-Soshanguve, Attridgeville -
              Orchards - Pta North - Montana
            </td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Mthembu</ul>
              <ul className={`${Styles.list}`}>Thulani Mthembu</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>067 627 4351</ul>
              <ul className={`${Styles.list}`}>081 564 3642</ul>
            </td>
            <td className={`${Styles.headContent}`}>Soweto - Meadowlands</td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Bekker High School</ul>
              <ul className={`${Styles.list}`}>Mrs H Ras</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>0145775936</ul>
              <ul className={`${Styles.list}`}>0145775937</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              Westonaria - Rustenburg - Midrand - Northgate Centurion - Fourways
              - Pinehaven
            </td>
          </tr>
          <tr>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>Ndlovo Transport</ul>
              <ul className={`${Styles.list}`}>Moses</ul>
            </td>
            <td className={`${Styles.headContent}`}>
              <ul className={`${Styles.list}`}>073 976 5401</ul>
              <ul className={`${Styles.list}`}>065 846 4010</ul>
            </td>
            <td className={`${Styles.headContent}`}> Tarlton, Kagiso</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
