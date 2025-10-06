import { Column, Heading, Meta, Schema, Text, Input, Button, Row, Flex, Card, Icon, SmartLink } from "@once-ui-system/core";
import { social, person } from "@/resources";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact - " + person.name,
    description: `Get in touch with ${person.name} - ${person.role}`,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact - " + person.name)}`,
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Contact - ${person.name}`}
        description={`Get in touch with ${person.name} - ${person.role}`}
        path="/contact"
        image={`/api/og/generate?title=${encodeURIComponent("Contact - " + person.name)}`}
      />
      
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Get In Touch
      </Heading>
      
      <Column fillWidth gap="40" paddingX="24">
        <Text variant="body-default-l" onBackground="neutral-weak">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to connect or discuss potential collaborations.
        </Text>

        {/* Contact Form */}
        <Card fillWidth padding="24" background="neutral-alpha-weak" radius="l">
          <form action={`mailto:${person.email}`} method="GET">
            <Column gap="16">
              <Column marginBottom="16">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Column>
              <Column marginBottom="16">
                <Input
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  type="email"
                />
              </Column>
              <Column marginBottom="16">
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  type="tel"
                />
              </Column>
              <Column marginBottom="16">
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </Column>
              <Column marginBottom="16">
                <textarea
                  id="additional-info"
                  name="additional-info"
                  placeholder="Additional Information (Optional)"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid var(--color-neutral-alpha-medium)',
                    backgroundColor: 'var(--color-background-surface)',
                    color: 'var(--color-foreground-primary)',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </Column>
              <Row horizontal="end">
                <Button
                  type="submit"
                  variant="primary"
                  size="m"
                  prefixIcon="send"
                >
                  Send Email
                </Button>
              </Row>
            </Column>
          </form>
        </Card>

        {/* WhatsApp Contact Card */}
        <SmartLink
          href={`https://wa.me/${person.phone}`}
          style={{ textDecoration: 'none' }}
        >
          <Card
            fillWidth
            padding="24"
            background="brand-alpha-weak"
            radius="l"
          >
            <Row gap="16" vertical="center">
              <Icon name="whatsapp" size="m" />
              <Column>
                <Text variant="body-strong-m">WhatsApp</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Chat with me on WhatsApp
                </Text>
              </Column>
            </Row>
          </Card>
        </SmartLink>

        {/* Social Media Cards */}
        <Heading as="h2" variant="heading-strong-l" marginTop="xl">
          Connect With Me
        </Heading>
        
        <Flex fillWidth gap="16" wrap>
          {social.map((item) => (
            item.link && (
              <SmartLink
                key={item.name}
                href={item.link}
                style={{ flex: 1, minWidth: '200px' }}
              >
                <Card
                  fillWidth
                  padding="16"
                  background="neutral-alpha-weak"
                  radius="m"
                >
                  <Row gap="12" vertical="center">
                    <Icon name={item.icon} size="m" />
                    <Column>
                      <Text variant="body-strong-m">{item.name}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.name === "Email" ? "Send me an email" : `Connect on ${item.name}`}
                      </Text>
                    </Column>
                  </Row>
                </Card>
              </SmartLink>
            )
          ))}
        </Flex>

        {/* Additional Contact Info */}
        <Card fillWidth padding="24" background="neutral-alpha-weak" radius="l">
          <Row gap="16" vertical="center">
            <Icon name="location" size="m" />
            <Column>
              <Text variant="body-strong-m">Location</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location}
              </Text>
            </Column>
          </Row>
        </Card>
      </Column>
    </Column>
  );
}