-- Create the bg_open_participants table for Belgrade Open tournament registration
-- This table stores participant information from the registration form

CREATE TABLE IF NOT EXISTS bg_open_participants (
    -- Primary key
    id BIGSERIAL PRIMARY KEY,
    
    -- Contact information
    e_mail VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    
    -- Go player information
    category VARCHAR(10) NOT NULL CHECK (
        category IN (
            '22k', '21k', '20k', '19k', '18k', '17k', '16k', '15k', '14k', '13k', '12k', '11k', '10k', 
            '9k', '8k', '7k', '6k', '5k', '4k', '3k', '2k', '1k',
            '1D', '2D', '3D', '4D', '5D', '6D', '7D'
        )
    ),
    
    -- Club and location information
    club VARCHAR(200) NOT NULL,
    country VARCHAR(100) NOT NULL,
    
    -- Additional notes/assistance
    note TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_bg_open_participants_updated_at 
    BEFORE UPDATE ON bg_open_participants 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for public display (excluding sensitive information)
CREATE OR REPLACE VIEW bg_open_participants_public AS
SELECT 
    id,
    first_name,
    last_name,
    category,
    club,
    country,
    created_at
FROM bg_open_participants
ORDER BY created_at DESC;

COMMENT ON VIEW bg_open_participants_public IS 'Public view of participants for display purposes (excludes email and notes)'; 