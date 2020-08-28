import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styled from "@emotion/styled";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <>
      <Layout>
        <Title>inicio</Title>
      </Layout>
    </>
  );
}
