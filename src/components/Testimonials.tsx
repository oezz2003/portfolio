import { Column, Heading, Text, Row } from "@once-ui-system/core";
import { home } from "@/resources";

const STAR_KEYS = ['star-0', 'star-1', 'star-2', 'star-3', 'star-4'];

export function Testimonials() {
  if (!home.testimonials.display) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={STAR_KEYS[i]}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column fillWidth gap="16" marginTop="40">
        <Column maxWidth="s" paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.testimonials.title}
          </Heading>
          <Text 
            variant="heading-default-m" 
            onBackground="neutral-weak" 
            marginTop="8"
          >
            {home.testimonials.description}
          </Text>
        </Column>
        <Row 
          flex={3} 
          paddingX="20" 
          paddingY="24"
          gap="24"
          wrap={true}
          horizontal="start"
        >
          {home.testimonials.reviews.map((review, index) => (
            <Column
              key={review.name}
              paddingX="24"
              paddingY="32"
              className="flex-1 min-w-[300px] bg-gradient-to-br from-brand-alpha-weak/10 to-transparent rounded-lg border border-brand-alpha-weak/30 hover:border-brand-alpha-weak/50 transition-all duration-300"
              gap="16"
            >
              <Row gap="8" vertical="center">
                {renderStars(review.rating)}
              </Row>
              <Text 
                variant="body-default-m" 
                onBackground="neutral-strong"
                className="italic"
              >
                "{review.content}"
              </Text>
              <Column gap="4">
                <Text 
                  variant="heading-default-s" 
                  onBackground="neutral-strong"
                  className="font-semibold"
                >
                  {review.name}
                </Text>
                <Text 
                  variant="label-default-s" 
                  onBackground="neutral-weak"
                >
                  {review.role}
                </Text>
              </Column>
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

