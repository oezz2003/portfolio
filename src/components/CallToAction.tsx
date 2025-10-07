import { Column, Heading, Text, Row, Button } from "@once-ui-system/core";
import { home } from "@/resources";

export function CallToAction() {
  if (!home.callToAction.display) return null;

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column 
        fillWidth 
        gap="24" 
        marginTop="40"
        paddingX="24"
        paddingY="48"
        className="bg-gradient-to-br from-brand-alpha-weak/20 via-brand-alpha-weak/10 to-transparent rounded-2xl border border-brand-alpha-weak/30"
      >
        <Column maxWidth="m" horizontal="center" align="center" gap="16">
          <Heading as="h2" variant="display-strong-m" wrap="balance" align="center">
            {home.callToAction.title}
          </Heading>
          <Text 
            variant="heading-default-l" 
            onBackground="neutral-weak" 
            align="center"
            className="max-w-2xl"
          >
            {home.callToAction.description}
          </Text>
        </Column>
        
        <Row gap="16" horizontal="center" wrap={true} marginTop="16">
          <Button
            href={home.callToAction.primaryButton.href}
            variant="primary"
            size="l"
            weight="default"
            arrowIcon
            className="min-w-[160px]"
          >
            {home.callToAction.primaryButton.text}
          </Button>
          <Button
            href={home.callToAction.secondaryButton.href}
            variant="secondary"
            size="l"
            weight="default"
            arrowIcon
            className="min-w-[160px]"
          >
            {home.callToAction.secondaryButton.text}
          </Button>
        </Row>

        <Row 
          gap="24" 
          horizontal="center" 
          wrap={true} 
          marginTop="32"
          paddingX="24"
        >
          {home.callToAction.features.map((feature, index) => (
            <Row
              key={feature}
              gap="8"
              vertical="center"
              paddingX="16"
              paddingY="8"
              className="bg-brand-alpha-weak/20 rounded-full border border-brand-alpha-weak/40"
            >
              <div className="w-2 h-2 bg-brand-strong rounded-full" />
              <Text variant="label-default-s" onBackground="neutral-strong">
                {feature}
              </Text>
            </Row>
          ))}
        </Row>
      </Column>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <div className="w-12 h-px bg-gradient-to-l from-brand-alpha-strong to-transparent" />
      </Row>
    </Column>
  );
}

