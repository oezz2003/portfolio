import { Column, Heading, Text, Row } from "@once-ui-system/core";
import { home } from "@/resources";

export function Process() {
  if (!home.process.display) return null;

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column fillWidth gap="16" marginTop="40">
        <Column maxWidth="s" paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.process.title}
          </Heading>
          <Text 
            variant="heading-default-m" 
            onBackground="neutral-weak" 
            marginTop="8"
            wrap="balance"
          >
            {home.process.description}
          </Text>
        </Column>
        
        <Row 
          flex={3} 
          paddingX="20" 
          paddingY="24"
          gap="24"
          wrap="wrap"
          horizontal="start"
        >
          {home.process.steps.map((step, index) => (
            <Column
              key={index}
              className="flex-1 min-w-[280px] max-w-[320px]"
              gap="16"
            >
              <Row
                paddingX="24"
                paddingY="32"
                className="bg-gradient-to-br from-brand-alpha-weak/10 to-transparent rounded-xl border border-brand-alpha-weak/30 hover:border-brand-alpha-weak/50 transition-all duration-300 h-full"
                gap="20"
              >
                <Column align="center" gap="8" className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-strong to-brand-medium rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <Text 
                    variant="label-default-s" 
                    onBackground="brand-strong"
                    className="font-bold"
                  >
                    {step.number}
                  </Text>
                </Column>
                
                <Column gap="12" flex={1}>
                  <Text 
                    variant="heading-default-s" 
                    onBackground="neutral-strong"
                    className="font-semibold"
                  >
                    {step.title}
                  </Text>
                  <Text 
                    variant="body-default-s" 
                    onBackground="neutral-weak"
                    className="leading-relaxed"
                  >
                    {step.description}
                  </Text>
                </Column>
              </Row>
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

