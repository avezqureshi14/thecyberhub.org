import styled from "styled-components";
import bgImage from "./../../assets/images/certificate-bg.png";

export const CertificateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  color: #fff;
`;

export const CertificateComponent = styled.div`
  width: 60em;
  padding: 1rem 5rem;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: whitesmoke;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.3rem solid #222;
  align-items: center;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .certificate-word {
    margin-top: 4rem;
    font-weight: 500;
    font-size: 4rem;
  }

  .achievement-word {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 2rem;
  }

  .presented-word {
    margin-top: 1.5rem;
    font-weight: 300;
    font-size: 1.5rem;
  }

  .full-name {
    padding: 1rem 2rem 0.5rem 2rem;
    margin-top: 3rem;
    font-weight: 300;
    font-size: 2rem;
    border-bottom: 2px solid #ccc;
  }

  .description {
    margin-top: 3rem;
    max-width: 50vw;
  }
`;

export const CertificateFooter = styled.div`
  min-width: 60em;
  max-width: 60em;
  padding: 0px 50px;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;

  .date-block {
    .date {
      padding: 1rem 1rem 0.5rem 1rem;
      border-bottom: 2px solid #ccc;
    }

    .date-word {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .certificate-id {
    justify-content: end;
  }

  .signature-block {
    .signature {
      padding: 1rem 1rem 0.5rem 1rem;
      border-bottom: 2px solid #ccc;
    }

    .signature-word {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;
