import { FC } from "react";
import { IBlogPostDataContent } from "../../interfaces/blogPostDataContent";
import { Flex, Image, Typography } from "antd";

interface IBlogPostRendererProps {
  items: Array<IBlogPostDataContent>
}

export const BlogPostRenderer: FC<IBlogPostRendererProps> = ({ items }) => {
  return items.map(({ section, text }) => {
    switch (section) {
      case 'image': {
        return (
          <Flex justify="center" key={`${section}-${text}`}>
            <Image
              preview={false}
              src={text}
              alt={text}
            />
          </Flex>
        )
      }

      default: {
        return (
          <Typography.Paragraph key={`${section}-${text}`}>
            {text}
          </Typography.Paragraph>
        )
      }
    }
  })
}