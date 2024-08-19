import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import LogoComponent from "../components/logo.component"

const FooterLayout = () => {

  const links = [
    {
      "title": "Categories",
      "sublinks": [
        {
          "title": "Clothing",
          "url": ""
        },
        {
          "title": "Electronics",
          "url": ""
        },
        {
          "title": "Furniture",
          "url": ""
        },
        {
          "title": "Jewelry",
          "url": ""
        },
      ]
    },
    {
      "title": "About",
      "sublinks": [
        {
          "title": "About Us",
          "url": ""
        },
        {
          "title": "Contact Us",
          "url": ""
        },
        {
          "title": "Privacy Policy",
          "url": ""
        },
        {
          "title": "Terms & Conditions",
          "url": ""
        }
      ]
    },
    {
      "title": "Help",
      "sublinks": [
        {
          "title": "FAQ",
          "url": ""
        },
        {
          "title": "Shipping",
          "url": ""
        },
        {
          "title": "Returns",
          "url": ""
        },
        {
          "title": "Payments",
          "url": ""
        }
      ]
    },
    {
      "title": "Social",
      "sublinks": [
        {
          "title": "Facebook",
          "url": ""
        },
        {
          "title": "Instagram",
          "url": ""
        },
        {
          "title": "Twitter",
          "url": ""
        },
        {
          "title": "LinkedIn",
          "url": ""
        }
      ]
    }
  ]
  
  return (
    <Box w="100%" borderTop="1px" borderColor="var(--borderColor)" display="flex" flexDir="column">
      <Box display="flex" flexDir="row" flexWrap="wrap" alignItems="center" w="100%" maxW="1440px" h={{mobile: "250px", desktop: "175px"}} margin="0 auto auto auto" p={{mobile: "10px 10px", desktop: 0}}>
        {links.map((link:typeof links[0],i:any)=>(
          <Box key={i} w={{mobile: "50%", desktop: "25%"}} display="flex" justifyContent={{mobile: "start", desktop: "center"}}>
            <Box mb={{mobile: "10px", desktop: "initial"}}>
              <Text fontSize={{mobile: "14px", desktop: "18px"}} fontWeight="600" mb="4px">{link.title}</Text>
              <Box display="flex" flexDir="column">
                {link.sublinks.map((sublink:typeof links[0]["sublinks"][0],j:any)=>(
                  <Text as={Link} to={sublink.url} key={j} fontSize={{mobile: "11px", desktop: "14px"}} mb="2px" _hover={{textDecor: "underline"}}>{sublink.title}</Text>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box h={{mobile: "75px", desktop: "100px"}} display="flex" alignItems="center">
        <LogoComponent/>
      </Box>
      <Box borderTop="1px solid var(--borderColor)" h="40px" display="flex" alignItems="center">
        <Box w="100%" maxW="1440px" margin="auto" px="10px">
          <Text fontSize={{mobile: "11px", desktop: "14px"}} textAlign="center">© 2024 eCommerceProductListing. All Rights Reserved.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default FooterLayout