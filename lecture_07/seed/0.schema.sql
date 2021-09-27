-- adding UUID support
SELECT * FROM pg_available_extensions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(30) NOT NULL,
    email VARCHAR(80) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    avatar_url VARCHAR(80)
);

CREATE TABLE IF NOT EXISTS channels (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users (id),
    description VARCHAR(100) NOT NULL,
    photo_url VARCHAR(80) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
);

-- duration in seconds
CREATE TABLE IF NOT EXISTS videos (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    channel_id UUID REFERENCES channels (id),
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    preview_url VARCHAR(80) NOT NULL,
    file_url VARCHAR(80) NOT NULL,
    duration bigint NOT NULL,
    published_at DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    channel_id UUID REFERENCES channels (id),
    user_id UUID REFERENCES users (id),
    level VARCHAR(50) NOT NULL DEFAULT 'standard',
    subscribed_at DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS comments (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    video_id UUID REFERENCES videos (id),
    user_id UUID REFERENCES users (id),
    text VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS likes (
    video_id UUID REFERENCES videos (id),
    user_id UUID REFERENCES users (id),
    positive BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (video_id, user_id)
);
