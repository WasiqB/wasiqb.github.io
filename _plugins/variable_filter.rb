module Jekyll
  module VariableFilter
    def flatify(input)
      Liquid::Template.parse(input).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::VariableFilter)
