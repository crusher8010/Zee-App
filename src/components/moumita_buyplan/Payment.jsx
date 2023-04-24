import React, { useState } from 'react'
import GooglePayButton from "@google-pay/button-react"
import "./Payment.css";


import { Box, Button, Card, CardBody, Center, Divider, Stack, } from '@chakra-ui/react'


const Payment = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <Box>
      <Center>
        <Card maxW='sm'>
          <CardBody>

            <Center>
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '100.00',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={paymentRequest => {
                  console.log('load payment data', paymentRequest);
                }}
              />
            </Center>
            <Stack mt='2' spacing='3'>
              <Center>
                <Button size='md'
                  height='48px'
                  width='250px'
                  border='2px'
                  bg="white"
                  color="#391b53"
                  onClick={toggleModal}>UPI</Button>
              </Center>
              <Center>
                <Button size='md'
                  height='48px'
                  width='250px'
                  border='2px'
                  bg="white"
                  color="#391b53" onClick={toggleModal}>Credit/Debit Card</Button>
              </Center>
              <Center>
                <Button size='md'
                  height='48px'
                  width='250px'
                  border='2px'
                  bg="white"
                  color="#391b53" onClick={toggleModal}>Wallets</Button>
              </Center>
              <Center>
                <Button size='md'
                  height='48px'
                  width='250px'
                  border='2px'
                  bg="white"
                  color="#391b53" onClick={toggleModal}>Netbanking</Button>
              </Center>


            </Stack>
          </CardBody>
          <Divider />

        </Card>
      </Center>
    </Box>
  )
}

export default Payment