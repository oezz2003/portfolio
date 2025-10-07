import { Column, Heading, Text, Row, Badge } from "@once-ui-system/core";
import { home } from "@/resources";

export function Skills() {
  if (!home.skills.display) return null;

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column fillWidth gap="16" marginTop="40">
        <Column maxWidth="s" paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.skills.title}
          </Heading>
          <Text 
            variant="heading-default-m" 
            onBackground="neutral-weak" 
            marginTop="8"
          >
            {home.skills.description}
          </Text>
        </Column>
        <Row 
          flex={3} 
          paddingX="20" 
          paddingY="24"
          gap="12"
          wrap={true}
          horizontal="start"
        >
          {home.skills.tools.map((tool, index) => (
            <Badge
              key={tool.name}
              background="neutral-alpha-weak"
              paddingX="16"
              paddingY="8"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              className="hover:bg-brand-alpha-weak transition-colors duration-200"
            >
              {tool.name}
            </Badge>
          ))}
        </Row>
      </Column>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <div className="w-12 h-px bg-gradient-to-l from-brand-alpha-strong to-transparent" />
      </Row>
    </Column>
  );
}
