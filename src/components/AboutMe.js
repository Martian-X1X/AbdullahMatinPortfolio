import React from 'react';
import { Box, Text, Flex, Circle, VStack, useBreakpointValue, Container } from '@chakra-ui/react';
import { FaUserTie, FaGraduationCap } from 'react-icons/fa';

const timelineItems = [
  {
    number: '01',
    icon: FaUserTie,
    title: 'Islamia English School, Abu Dhabi, UAE',
    subtitle: 'O-Level - 2015',
    description: 'Mathematics, Physics, Chemistry, Biology, Information and Communication Technologies, Islamiyat, English, Bangla',
    bgColor: 'orange.400'
  },
  {
    number: '02',
    icon: FaUserTie,
    title: 'Islamia English School, Abu Dhabi, UAE',
    subtitle: 'A-Level - 2016-2019',
    description: 'Mathematics, Physics, Chemistry',
    bgColor: 'orange.500'
  },
  {
    number: '03',
    icon: FaGraduationCap,
    title: 'Independent University, Bangladesh',
    subtitle: 'BSc in Computer Science Engineering - 2019-2024',
    description: 'Algorithms, Data-structures, Object Oriented Programming, Machine Learning, Artificial Intelligence',
    bgColor: 'orange.600'
  },
];

const AboutMe = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="about" bg="black" py={10} px={4}>
      <Text fontSize={["2xl", "3xl"]} color="red.600" textAlign="left" fontWeight="bold" mb={10} marginLeft={36}>
        ABOUT ME:
      </Text>
      <Flex 
        direction={isMobile ? "column" : "row"} 
        justify="center" 
        align="center" 
        position="relative"
      >
        {/* Horizontal or Vertical line to connect circles */}
        <Box 
          position="absolute" 
          top={isMobile ? "0" : "50%"} 
          left={isMobile ? "50%" : "0"} 
          right={isMobile ? "auto" : "0"} 
          bottom={isMobile ? "0" : "auto"} 
          width={isMobile ? "2px" : "auto"} 
          height={isMobile ? "auto" : "2px"} 
          bg="gray.500" 
          zIndex={0} 
        />

        {timelineItems.map((item, index) => (
          <VStack key={index} spacing={4} align="center" zIndex={1} mb={8} mx={4}>
            {/* Circle with Number */}
            <Flex direction="column" align="center">
              <Circle size={["60px", "70px"]} bg={item.bgColor} color="white" mb={3} position="relative">
                <Text fontWeight="bold" fontSize={["md", "lg"]} color="white" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                  {item.number}
                </Text>
              </Circle>
              {/* Box with Icon */}
              <Box bg={item.bgColor} p={3} borderRadius="full" mb={-8} position="relative">
                <item.icon size={24} color="white" />
              </Box>
            </Flex>

            {/* Text Content */}
            <Box bg="white" p={4} borderRadius="md" boxShadow="md" w={["full", "250px"]}>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" color={item.bgColor} mb={2} textAlign="center">
                {item.title}
              </Text>
              <Text fontSize={["sm", "md"]} fontWeight="semibold" color="gray.700" mb={2} textAlign="center">
                {item.subtitle}
              </Text>
              <Text fontSize={["xs", "sm"]} color="gray.600" textAlign="center">
                {item.description}
              </Text>
            </Box>
          </VStack>
        ))}
      </Flex>

      {/* About Me Paragraph */}
      <Container maxW="4xl" mt={16}>
        <Text fontSize={["md", "lg"]} color="white" lineHeight="tall" textAlign="justify">
          Raised in the vibrant and multicultural environment of the UAE, but deeply rooted in my heritage as a Bangladeshi, I have always been driven by a strong sense of curiosity and creativity. This unique blend of cultures has shaped my worldview, encouraging me to think critically and embrace diverse perspectives.
        </Text>
        
        <Text fontSize={["md", "lg"]} color="white" lineHeight="tall" textAlign="justify" mt={4}>
          From a young age, I developed a natural inclination towards problem-solving, a skill that has only grown stronger over the years. Whether it was tackling challenging puzzles or navigating the complexities of academic subjects, I have always been drawn to the intellectual rigor required to overcome obstacles. My passion for technology and innovation grew alongside my interests, guiding me towards the field of Computer Science and Engineering, where I can fully exercise my analytical skills and creativity.
        </Text>
        
        <Text fontSize={["md", "lg"]} color="white" lineHeight="tall" textAlign="justify" mt={4}>
          In my free time, I find joy in exploring new experiences, whether through immersing myself in the rich storytelling of video games or savoring the diverse flavors of global cuisines. For me, gaming is more than just entertainment; it's a way to experience different worlds and sharpen my strategic thinking. Similarly, trying out new dishes from different cultures allows me to appreciate the creativity behind each recipe, much like solving a complex problem in programming.
        </Text>
        
        <Text fontSize={["md", "lg"]} color="white" lineHeight="tall" textAlign="justify" mt={4}>
          I am constantly pushing myself to learn and evolve, whether through deep learning in technology, understanding new algorithms, or simply finding new ways to challenge my mind. My goal is to never stop growing—whether it's by mastering a new skill, exploring a new place, or finding innovative solutions to real-world problems. Every experience, whether big or small, contributes to expanding my horizons and shaping me into a more well-rounded individual.
        </Text>
        
        <Text fontSize={["md", "lg"]} color="white" lineHeight="tall" textAlign="justify" mt={4}>
          At the core of who I am is a relentless desire to grow, not just as a professional, but as a human being. I thrive on learning, experimenting, and applying my knowledge to make meaningful contributions to the world around me.
        </Text>
      </Container>
    </Box>
  );
};

export default AboutMe;