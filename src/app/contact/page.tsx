import { Column, Heading, Schema, Text, Row, Flex, Card, Icon, SmartLink } from "@once-ui-system/core";
import { social, person, contact } from "@/resources";
import { baseURL } from "@/resources";
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.title,
      description: contact.description,
      images: [
        {
          url: baseURL + (contact.image || "/images/og/home e.jpg"),
          width: 1280,
          height: 720,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: contact.title,
      description: contact.description,
      images: [baseURL + (contact.image || "/images/og/home e.jpg")],
    },
  };
}

export default function Contact() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={contact.image || "/images/og/home e.jpg"}
      />
      
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        Get In Touch
      </Heading>
      
      <Column fillWidth gap="40" paddingX="24">
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to connect or discuss potential collaborations.
        </Text>

        {/* Contact Information Cards */}
        <Column gap="24">
          <Heading as="h2" variant="heading-strong-l" align="center">
            Get In Touch
          </Heading>
          
          <Flex fillWidth gap="24" wrap horizontal="center">
            {/* Email Card */}
            <SmartLink
              href="mailto:oezz8459@gmail.com"
              style={{ flex: 1, minWidth: '300px', maxWidth: '400px', textDecoration: 'none' }}
            >
              <Card
                fillWidth
                padding="32"
                background="brand-alpha-weak"
                radius="l"
                className="hover:bg-brand-alpha-medium transition-colors duration-200"
              >
                <Column gap="16" align="center">
                  <Icon name="email" size="xl" />
                  <Column gap="8" align="center">
                    <Text variant="heading-strong-m" onBackground="neutral-strong">
                      Email Me
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                      Send me an email directly
                    </Text>
                    <Text variant="body-strong-s" onBackground="brand-strong" align="center" className="break-all">
                      oezz8459@gmail.com
                    </Text>
                  </Column>
                </Column>
              </Card>
            </SmartLink>

            {/* WhatsApp Card */}
            <SmartLink
              href="https://wa.me/201040378725"
              style={{ flex: 1, minWidth: '300px', maxWidth: '400px', textDecoration: 'none' }}
            >
              <Card
                fillWidth
                padding="32"
                background="brand-alpha-weak"
                radius="l"
                className="hover:bg-brand-alpha-medium transition-colors duration-200"
              >
                <Column gap="16" align="center">
                  <Icon name="whatsapp" size="xl" />
                  <Column gap="8" align="center">
                    <Text variant="heading-strong-m" onBackground="neutral-strong">
                      WhatsApp
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                      Chat with me instantly
                    </Text>
                    <Text variant="body-strong-s" onBackground="brand-strong" align="center">
                      +20 104 037 8725
                    </Text>
                  </Column>
                </Column>
              </Card>
            </SmartLink>
          </Flex>
        </Column>

        {/* Social Media Links */}
        <Column gap="24">
          <Heading as="h2" variant="heading-strong-l" align="center">
            Connect With Me
          </Heading>
          
          <Flex fillWidth gap="20" wrap horizontal="center">
            {/* Facebook Card */}
            <SmartLink
              href="https://www.facebook.com/ezzaldeen.osama2003"
              style={{ flex: 1, minWidth: '250px', maxWidth: '300px', textDecoration: 'none' }}
            >
              <Card
                fillWidth
                padding="24"
                background="neutral-alpha-weak"
                radius="l"
                className="hover:bg-neutral-alpha-medium transition-colors duration-200"
              >
                <Row gap="16" vertical="center">
                  <Icon name="facebook" size="l" />
                  <Column>
                    <Text variant="body-strong-l">Facebook</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Follow me on Facebook
                    </Text>
                  </Column>
                </Row>
              </Card>
            </SmartLink>

            {/* LinkedIn Card */}
            <SmartLink
              href="https://www.linkedin.com/in/ezz-osama/"
              style={{ flex: 1, minWidth: '250px', maxWidth: '300px', textDecoration: 'none' }}
            >
              <Card
                fillWidth
                padding="24"
                background="neutral-alpha-weak"
                radius="l"
                className="hover:bg-neutral-alpha-medium transition-colors duration-200"
              >
                <Row gap="16" vertical="center">
                  <Icon name="linkedin" size="l" />
                  <Column>
                    <Text variant="body-strong-l">LinkedIn</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Connect professionally
                    </Text>
                  </Column>
                </Row>
              </Card>
            </SmartLink>

          </Flex>

          {/* Location Card */}
          <Card
            fillWidth
            padding="24"
            background="neutral-alpha-weak"
            radius="l"
            className="max-w-[400px] mx-auto"
          >
            <Row gap="16" vertical="center" horizontal="center">
              <Icon name="location" size="l" />
              <Column align="center">
                <Text variant="body-strong-l">Location</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {person.location}
                </Text>
              </Column>
            </Row>
          </Card>
        </Column>
      </Column>
    </Column>
  );
}