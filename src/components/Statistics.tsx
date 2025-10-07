import { Column, Heading, Text, Row } from "@once-ui-system/core";
import { home } from "@/resources";

export function Statistics() {
  if (!home.stats.display) return null;

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column fillWidth gap="16" marginTop="40">
        <Column maxWidth="s" paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.stats.title}
          </Heading>
          <Text 
            variant="heading-default-m" 
            onBackground="neutral-weak" 
            marginTop="8"
          >
            {home.stats.description}
          </Text>
        </Column>
        <Row 
          flex={3} 
          paddingX="20" 
          paddingY="24"
          gap="24"
          wrap={true}
          horizontal="center"
        >
          {home.stats.items.map((stat, index) => (
            <Column
              key={stat.label}
              align="center"
              gap="8"
              paddingX="24"
              paddingY="32"
              className="flex-1 min-w-[200px] bg-gradient-to-br from-brand-alpha-weak/20 to-transparent rounded-lg border border-brand-alpha-weak/30 hover:border-brand-alpha-weak/50 transition-all duration-300"
            >
              <Text 
                variant="display-strong-l" 
                onBackground="brand-strong"
                className="font-bold"
              >
                {stat.number}
              </Text>
              <Text 
                variant="label-default-s" 
                onBackground="neutral-weak"
                align="center"
              >
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <div className="w-12 h-px bg-gradient-to-l from-brand-alpha-strong to-transparent" />
      </Row>
    </Column>
  );
}

