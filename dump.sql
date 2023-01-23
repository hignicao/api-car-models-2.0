--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: car; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.car (
    id integer NOT NULL,
    model text NOT NULL,
    year integer NOT NULL,
    color text NOT NULL,
    engine text NOT NULL,
    hp integer NOT NULL
);


--
-- Name: car_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.car_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.car_id_seq OWNED BY public.car.id;


--
-- Name: circuits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.circuits (
    id integer NOT NULL,
    racer_id integer NOT NULL,
    car_id integer NOT NULL,
    track_id integer NOT NULL,
    time_lap interval NOT NULL
);


--
-- Name: circuits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.circuits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: circuits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.circuits_id_seq OWNED BY public.circuits.id;


--
-- Name: racer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.racer (
    id integer NOT NULL,
    name text NOT NULL,
    birth date NOT NULL,
    number integer NOT NULL,
    races integer DEFAULT 0
);


--
-- Name: racer_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.racer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: racer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.racer_id_seq OWNED BY public.racer.id;


--
-- Name: track; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.track (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: track_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.track_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: track_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.track_id_seq OWNED BY public.track.id;


--
-- Name: car id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.car ALTER COLUMN id SET DEFAULT nextval('public.car_id_seq'::regclass);


--
-- Name: circuits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.circuits ALTER COLUMN id SET DEFAULT nextval('public.circuits_id_seq'::regclass);


--
-- Name: racer id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.racer ALTER COLUMN id SET DEFAULT nextval('public.racer_id_seq'::regclass);


--
-- Name: track id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.track ALTER COLUMN id SET DEFAULT nextval('public.track_id_seq'::regclass);


--
-- Data for Name: car; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.car VALUES (1, 'Mazda RX-7', 1999, 'Yellow', 'Rotary', 350);
INSERT INTO public.car VALUES (2, 'Toyota Supra', 1997, 'Black', 'I6', 400);
INSERT INTO public.car VALUES (3, 'Honda NSX', 1992, 'Red', 'V6', 290);


--
-- Data for Name: circuits; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.circuits VALUES (2, 1, 1, 2, '00:02:00');
INSERT INTO public.circuits VALUES (3, 2, 3, 2, '00:01:40');
INSERT INTO public.circuits VALUES (4, 3, 2, 2, '00:01:50');
INSERT INTO public.circuits VALUES (10, 1, 3, 2, '00:02:50');
INSERT INTO public.circuits VALUES (11, 3, 2, 2, '00:02:10');


--
-- Data for Name: racer; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.racer VALUES (1, 'Hugo', '1998-07-27', 7, 0);
INSERT INTO public.racer VALUES (2, 'Senna', '1960-03-21', 1, 0);
INSERT INTO public.racer VALUES (3, 'Massa', '1970-06-11', 19, 0);


--
-- Data for Name: track; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.track VALUES (1, 'Interlagos');
INSERT INTO public.track VALUES (2, 'Nurburgring');
INSERT INTO public.track VALUES (3, 'Monaco');


--
-- Name: car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.car_id_seq', 3, true);


--
-- Name: circuits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.circuits_id_seq', 11, true);


--
-- Name: racer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.racer_id_seq', 3, true);


--
-- Name: track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.track_id_seq', 3, true);


--
-- Name: car car_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.car
    ADD CONSTRAINT car_pk PRIMARY KEY (id);


--
-- Name: circuits circuits_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.circuits
    ADD CONSTRAINT circuits_pk PRIMARY KEY (id);


--
-- Name: racer racer_number_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.racer
    ADD CONSTRAINT racer_number_key UNIQUE (number);


--
-- Name: racer racer_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.racer
    ADD CONSTRAINT racer_pk PRIMARY KEY (id);


--
-- Name: track track_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT track_name_key UNIQUE (name);


--
-- Name: track track_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT track_pk PRIMARY KEY (id);


--
-- Name: circuits circuits_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.circuits
    ADD CONSTRAINT circuits_fk0 FOREIGN KEY (racer_id) REFERENCES public.racer(id);


--
-- Name: circuits circuits_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.circuits
    ADD CONSTRAINT circuits_fk1 FOREIGN KEY (car_id) REFERENCES public.car(id);


--
-- Name: circuits circuits_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.circuits
    ADD CONSTRAINT circuits_fk2 FOREIGN KEY (track_id) REFERENCES public.track(id);


--
-- PostgreSQL database dump complete
--

