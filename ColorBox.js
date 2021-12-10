export function ColorBox({ paint }) {
  const styles = {
    height: "50px",
    width: "120px",
    backgroundColor: paint,
    margin: "10px"
  };
  return <div style={styles}></div>;
}
