'use client';
import Image from "next/image";
import styled from "styled-components";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  @media (${({ theme }) => theme.breakpoints.xl}) {
    max-width: 80%;
  }
`;

export default function ResponsiveImage() {
  return (
    <ImageContainer>
      <StyledImage
        src="/office.jpg" 
        alt="Counseling office environment"
        width={1200}
        height={800}
      />
    </ImageContainer>
  );
}