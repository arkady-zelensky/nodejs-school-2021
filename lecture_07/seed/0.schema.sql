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
    description VARCHAR(100) NOT NULL ,
    photo_url VARCHAR(80) NOT NULL ,
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
