class User < ApplicationRecord
has_many :todos

# validates name: unique
end
